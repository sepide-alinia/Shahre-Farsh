type ButtonProps = {
  children: string;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="text-white bg-darkRed rounded-xl text-center py-2 mt-5 hover:cursor-pointer hover:bg-darkRed">
      {children}
    </button>
  );
}
