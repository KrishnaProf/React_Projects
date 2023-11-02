import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <h1>Alert</h1>
      <div className="alert alert-primary alert-dismissible">
        {children}
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          data-bs-dismiss
        >
          {" "}
        </button>
      </div>
    </>
  );
};

export default Alert;
