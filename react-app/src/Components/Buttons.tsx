interface Props {
  children: React.ReactNode;
}

const Buttons = ({ children }: Props) => {
  return (
    <>
      <h1>Buttons</h1>
      <button className="btn btn-primary">{children}</button>;
    </>
  );
};

export default Buttons;
