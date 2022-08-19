let baseURL = "http://localhost:4000/discussions";

export function getDiscussions() {
  return fetch(baseURL).then((res) => res.json());
}

export function postDiscussions() {}

export function updataDiscussions() {}

export function deleteDiscussions() {}
