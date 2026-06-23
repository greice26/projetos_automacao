class BaseService {
  constructor(request, token) {
    this.request = request;
    this.token = token;
  }

  get headers() {
    return {
      Authorization: `Basic ${this.token}`,
      'Content-Type': 'application/json',
    };
  }

  get(url, params = {}) {
    return this.request.get(url, { headers: this.headers, params });
  }

  post(url, data) {
    return this.request.post(url, { headers: this.headers, data });
  }

  put(url, data) {
    return this.request.put(url, { headers: this.headers, data });
  }
}

module.exports = { BaseService };
