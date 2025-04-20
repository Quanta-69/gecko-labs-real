// composables/useEventBus.js
import { reactive, readonly } from "vue";

export function useEventBus() {
  const state = reactive(new Map());

  const on = (event, callback) => {
    const callbacks = state.get(event) || [];
    callbacks.push(callback);
    state.set(event, callbacks);
  };

  const off = (event, callback) => {
    const callbacks = state.get(event) || [];
    const index = callbacks.indexOf(callback);
    if (index > -1) {
      callbacks.splice(index, 1);
      state.set(event, callbacks);
    }
  };

  const emit = (event, payload) => {
    const callbacks = state.get(event) || [];
    callbacks.forEach((callback) => callback(payload));
  };

  return {
    on,
    off,
    emit,
    events: readonly(state),
  };
}
