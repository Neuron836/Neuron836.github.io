// 移除了 loader，因为静态 SPA 模式不支持
export function meta() {
  return [{ title: "404 - Not Found" }];
}

export default function NotFound() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <a href="/">Back to Home</a>
    </div>
  );
}