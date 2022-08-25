import React, { useRef, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Text } from '../views/Text.view';

/** Specialize MediaStreamTrack so that we can refer specifically to an audio track. */
interface MediaStreamAudioTrack extends MediaStreamTrack {
    readonly kind: 'audio';
    clone(): MediaStreamAudioTrack;
}

/** Specialize MediaStreamTrack so that we can refer specifically to a video track. */
interface MediaStreamVideoTrack extends MediaStreamTrack {
    readonly kind: 'video';
    clone(): MediaStreamVideoTrack;
}

/** Assert that getAudioTracks and getVideoTracks return the tracks with the appropriate kind. */
interface MediaStream {
    getTracks(): MediaStreamTrack[];
    getAudioTracks(): MediaStreamAudioTrack[];
    getVideoTracks(): MediaStreamVideoTrack[];
}

// The following were originally generated from the spec using
// https://github.com/microsoft/TypeScript-DOM-lib-generator, then heavily modified.

/**
 * A track sink that is capable of exposing the unencoded frames from the track to a
 * ReadableStream, and exposes a control channel for signals going in the oppposite direction.
 */
interface MediaStreamTrackProcessor<T extends AudioData | VideoFrame> {
    /**
     * Allows reading the frames flowing through the MediaStreamTrack provided to the constructor.
     */
    readonly readable: ReadableStream<T>;
    /** Allows sending control signals to the MediaStreamTrack provided to the constructor. */
    readonly writableControl: WritableStream<MediaStreamTrackSignal>;
}

interface MediaStreamTrackProcessorInit {
    track: MediaStreamTrack;
    /**
     * If media frames are not read from MediaStreamTrackProcessor.readable quickly enough, the
     * MediaStreamTrackProcessor will internally buffer up to maxBufferSize of the frames produced
     * by the track. If the internal buffer is full, each time the track produces a new frame, the
     * oldest frame in the buffer will be dropped and the new frame will be added to the buffer.
     */
    maxBufferSize?: number | undefined;
}

interface MediaStreamVideoTrackProcessorInit
    extends MediaStreamTrackProcessorInit {
    track: MediaStreamVideoTrack;
}
interface MediaStreamAudioTrackProcessorInit
    extends MediaStreamTrackProcessorInit {
    track: MediaStreamAudioTrack;
}

/**
 * Takes video frames as input, and emits control signals that result from subsequent processing.
 */
interface MediaStreamTrackGenerator<T extends AudioData | VideoFrame>
    extends MediaStreamTrack {
    /**
     * Allows writing media frames to the MediaStreamTrackGenerator, which is itself a
     * MediaStreamTrack. When a frame is written to writable, the frame’s close() method is
     * automatically invoked, so that its internal resources are no longer accessible from
     * JavaScript.
     */
    readonly writable: WritableStream<T>;
    /**
     * Allows reading control signals sent from any sinks connected to the
     * MediaStreamTrackGenerator.
     */
    readonly readableControl: ReadableStream<MediaStreamTrackSignal>;
}

type MediaStreamAudioTrackGenerator = MediaStreamTrackGenerator<AudioData> &
    MediaStreamAudioTrack;
type MediaStreamVideoTrackGenerator = MediaStreamTrackGenerator<VideoFrame> &
    MediaStreamVideoTrack;

interface MediaStreamTrackGeneratorInit {
    kind: MediaStreamTrackGeneratorKind;
    /**
     * (Optional) track to which the MediaStreamTrackGenerator will automatically forward control
     * signals. If signalTarget is provided and signalTarget.kind and kind do not match, the
     * MediaStreamTrackGenerator’s constructor will raise an exception.
     */
    signalTarget?: MediaStreamTrack | undefined;
}

type MediaStreamTrackGeneratorKind = 'audio' | 'video';

type MediaStreamTrackSignalType = 'request-frame';

interface MediaStreamTrackSignal {
    signalType: MediaStreamTrackSignalType;
}

interface MediaStreamAudioTrackGeneratorInit
    extends MediaStreamTrackGeneratorInit {
    kind: 'audio';
    signalTarget?: MediaStreamAudioTrack | undefined;
}

interface MediaStreamVideoTrackGeneratorInit
    extends MediaStreamTrackGeneratorInit {
    kind: 'video';
    signalTarget?: MediaStreamVideoTrack | undefined;
}

declare global {
    const MediaStreamTrackProcessor: {
        prototype: MediaStreamTrackProcessor<AudioData | VideoFrame>;

        /** Constructor overrides based on the type of track. */
        new (
            init: MediaStreamAudioTrackProcessorInit
        ): MediaStreamTrackProcessor<AudioData>;
        new (
            init: MediaStreamVideoTrackProcessorInit
        ): MediaStreamTrackProcessor<VideoFrame>;
        new (
            init:
                | MediaStreamVideoTrackProcessorInit
                | MediaStreamAudioTrackProcessorInit
        ): MediaStreamTrackProcessor<never>;
    };
    const MediaStreamTrackGenerator: {
        prototype: MediaStreamTrackGenerator<AudioData | VideoFrame>;

        /** Constructor overrides based on the type of track. */
        new (
            init: MediaStreamAudioTrackGeneratorInit
        ): MediaStreamAudioTrackGenerator;
        new (
            init: MediaStreamVideoTrackGeneratorInit
        ): MediaStreamVideoTrackGenerator;
        new (
            init:
                | MediaStreamAudioTrackGeneratorInit
                | MediaStreamVideoTrackGeneratorInit
        ): never;
    };
}

const isVideoTrack = (
    track: MediaStreamTrack
): track is MediaStreamVideoTrack => track && track.kind === 'video';

const Pixlzr = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const width = 640;
        const height = 480;
        const abortController = new AbortController();
        const offscreenCanvas = new OffscreenCanvas(width, height);
        const offscreenContext = offscreenCanvas.getContext('2d');

        navigator.mediaDevices
            .getUserMedia({
                video: { height, width },
            })
            .then((stream) => {
                const signal = abortController.signal;
                const [track] = stream.getVideoTracks();
                if (isVideoTrack(track)) {
                    const processor = new MediaStreamTrackProcessor({ track });
                    const generator = new MediaStreamTrackGenerator({
                        kind: 'video',
                    });

                    processor.readable
                        .pipeThrough(
                            new TransformStream({
                                transform: async (videoFrame, controller) => {
                                    offscreenContext?.drawImage(
                                        videoFrame,
                                        0,
                                        0
                                    );

                                    const imageData =
                                        offscreenContext?.getImageData(
                                            0,
                                            0,
                                            width,
                                            height
                                        );

                                    if (!imageData) {
                                        return;
                                    }

                                    const index = (x: number, y: number) =>
                                        (x + y * width) * 4;
                                    for (let y = 0; y < height; y++) {
                                        for (let x = 0; x < width; x++) {
                                            const i = index(x, y);

                                            const r = imageData?.data[i] ?? 0;
                                            const g =
                                                imageData?.data[i + 1] ?? 0;
                                            const b =
                                                imageData?.data[i + 2] ?? 0;

                                            const factor = 1;

                                            const newR =
                                                Math.round((factor * r) / 255) *
                                                (255 / factor);

                                            const newG =
                                                Math.round((factor * g) / 255) *
                                                (255 / factor);

                                            const newB =
                                                Math.round((factor * b) / 255) *
                                                (255 / factor);

                                            imageData.data[i] = newR;

                                            imageData.data[i + 1] = newG;

                                            imageData.data[i + 2] = newB;

                                            const errR = r - newR;
                                            const errG = g - newG;
                                            const errB = b - newB;

                                            // x+1

                                            imageData.data[index(x + 1, y)] =
                                                imageData?.data[
                                                    index(x + 1, y)
                                                ] +
                                                (errR * 7) / 16;

                                            imageData.data[
                                                index(x + 1, y) + 1
                                            ] =
                                                imageData?.data[
                                                    index(x + 1, y) + 1
                                                ] +
                                                (errG * 7) / 16;

                                            imageData.data[
                                                index(x + 1, y) + 2
                                            ] =
                                                imageData?.data[
                                                    index(x + 1, y) + 1
                                                ] +
                                                (errB * 7) / 16;

                                            // x-1,y+1

                                            imageData.data[
                                                index(x - 1, y + 1)
                                            ] =
                                                imageData?.data[
                                                    index(x - 1, y + 1)
                                                ] +
                                                (errR * 3) / 16;

                                            imageData.data[
                                                index(x - 1, y + 1) + 1
                                            ] =
                                                imageData?.data[
                                                    index(x - 1, y + 1) + 1
                                                ] +
                                                (errG * 3) / 16;

                                            imageData.data[
                                                index(x - 1, y + 1) + 2
                                            ] =
                                                imageData?.data[
                                                    index(x - 1, y + 1) + 1
                                                ] +
                                                (errB * 3) / 16;

                                            // x,y+1

                                            imageData.data[index(x, y + 1)] =
                                                imageData?.data[
                                                    index(x, y + 1)
                                                ] +
                                                (errR * 5) / 16;

                                            imageData.data[
                                                index(x, y + 1) + 1
                                            ] =
                                                imageData?.data[
                                                    index(x, y + 1) + 1
                                                ] +
                                                (errG * 5) / 16;

                                            imageData.data[
                                                index(x, y + 1) + 2
                                            ] =
                                                imageData?.data[
                                                    index(x, y + 1) + 1
                                                ] +
                                                (errB * 5) / 16;

                                            // x+1,y+1

                                            imageData.data[
                                                index(x + 1, y + 1)
                                            ] =
                                                imageData?.data[
                                                    index(x + 1, y + 1)
                                                ] +
                                                (errR * 1) / 16;

                                            imageData.data[
                                                index(x + 1, y + 1) + 1
                                            ] =
                                                imageData?.data[
                                                    index(x + 1, y + 1) + 1
                                                ] +
                                                (errG * 1) / 16;

                                            imageData.data[
                                                index(x + 1, y + 1) + 2
                                            ] =
                                                imageData?.data[
                                                    index(x + 1, y + 1) + 1
                                                ] +
                                                (errB * 1) / 16;
                                        }
                                    }

                                    offscreenContext?.putImageData(
                                        imageData,
                                        0,
                                        0
                                    );
                                    videoFrame.close();
                                    const timestamp = videoFrame.timestamp ?? 0;
                                    controller.enqueue(
                                        new VideoFrame(
                                            offscreenCanvas as unknown as CanvasImageSource,
                                            {
                                                timestamp,
                                            }
                                        )
                                    );
                                    return;
                                },
                            }),
                            { signal }
                        )
                        .pipeTo(generator.writable, {
                            signal,
                        })
                        .catch((error) => {
                            console.error(error);
                        });

                    const pixlzrStream = new MediaStream([generator]);
                    if (videoRef.current) {
                        videoRef.current.srcObject = pixlzrStream;
                    }
                }
            });

        return () => {
            abortController.abort('Cleanup');
            const stream = videoRef.current?.srcObject;
            if (stream) {
                (stream as MediaStream)
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, []);

    return (
        <video
            autoPlay
            muted
            ref={videoRef}
            style={{
                display: 'block',
                height: '100vh',
                objectFit: 'cover',
                width: '100vw',
            }}
        />
    );
};

const PixlzrWithErrorBoundary = () => (
    <ErrorBoundary
        fallbackRender={(props) => (
            <Text>
                <p>
                    Was a bit lazy to get it working without MediaTrackGenerator
                    and OffscreenCanvas.
                    <br />
                    Best to check it in chrome before I make it backward
                    compatible ;){' '}
                </p>
                <code>{props.error.toString()}</code>
            </Text>
        )}
    >
        <Pixlzr />
    </ErrorBoundary>
);

export default { Page: PixlzrWithErrorBoundary };
