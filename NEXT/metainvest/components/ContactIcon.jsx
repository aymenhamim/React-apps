function ContactIcon({ title, value, children }) {
  return (
    <div className="flex w-fit items-center gap-4 my-4">
      <div className="w-12 h-12 max-sm:w-12  max-sm:h-12 rounded-lg bg-white flex items-center justify-center shadow-md ">
        {children}
      </div>

      <div className="flex flex-col">
        <h4 className="text-lg font-bold text-white ">{title}</h4>
        <p className="text-sm text-stone-500 ">{value}</p>
      </div>
    </div>
  );
}

export default ContactIcon;
