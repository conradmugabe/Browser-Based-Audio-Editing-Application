export async function initMock() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
  } else {
    const { worker } = await import("./browser");
    worker.start();
  }
}

export async function resetHandlers() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.resetHandlers();
  } else {
    const { worker } = await import("./browser");
    worker.resetHandlers();
  }
}

export async function close() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.close();
  } else {
    const { worker } = await import("./browser");
    worker.stop();
  }
}
