const HeaderBox = ({ type = "title", title, subtext, user }) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h1 className="text-2xl font-bold">
        {title}
        {type === 'greeting' && (
          <span className="bg-clip-text text-black">
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p className="text-gray-600 mt-2">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
