function ErrorMessage({ children }: { children: React.ReactNode }) {
  return <p style={{ color: "red", fontSize: "16px" }}>{children}</p>;
}

export default ErrorMessage;
