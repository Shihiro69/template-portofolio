/* ============================================================
   EVENT BUS
   Sprint 4: Rendering Engine
   ============================================================
   File:    js/core/events.js
   Purpose: Publish/subscribe event bus for decoupled
            component communication. Components never
            reference each other directly.
   Deps:    None (zero dependencies)
   ============================================================ */

"use strict";

class EventBus {
  constructor() {
    this._listeners = new Map();
  }

  /**
   * Subscribe to an event.
   * @param {string} event
   * @param {Function} callback
   * @returns {Function} — Unsubscribe function
   */
  on(event, callback) {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, new Set());
    }
    this._listeners.get(event).add(callback);

    return () => this.off(event, callback);
  }

  /**
   * Unsubscribe from an event.
   */
  off(event, callback) {
    const set = this._listeners.get(event);
    if (set) {
      set.delete(callback);
      if (set.size === 0) this._listeners.delete(event);
    }
  }

  /**
   * Subscribe once — auto-unsubscribe after first emit.
   * @param {string} event
   * @param {Function} callback
   * @returns {Function} — Unsubscribe function
   */
  once(event, callback) {
    const wrapper = (...args) => {
      this.off(event, wrapper);
      callback(...args);
    };
    return this.on(event, wrapper);
  }

  /**
   * Emit an event.
   * @param {string} event
   * @param {*} [data]
   */
  emit(event, data) {
    const set = this._listeners.get(event);
    if (!set) return;

    set.forEach(callback => {
      try {
        callback(data);
      } catch (error) {
        console.error(`[EventBus] Error in handler for "${event}":`, error);
      }
    });
  }

  /**
   * Remove all listeners for an event, or all events if none specified.
   * @param {string} [event]
   */
  clear(event) {
    if (event) {
      this._listeners.delete(event);
    } else {
      this._listeners.clear();
    }
  }
}

const events = new EventBus();

export { events, EventBus };
