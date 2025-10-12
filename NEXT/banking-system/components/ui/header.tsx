interface PageHeaderType {
  title: string;
  description: string;
}

function PageHeader({ title, description }: PageHeaderType) {
  return (
    <div className="mb-6 flex justify-between items-center flex-wrap">
      <div className="max-sm:mb-5">
        <h2 className="text-3xl font-semibold font-mono">{title}</h2>
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default PageHeader;
