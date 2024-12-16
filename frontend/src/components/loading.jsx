const Loading = () => {
  return (
    <div className="flex items center space-x-4">
      <div className="animate-ping rounded-full p-3 bg-white"></div>

      <h3 className="text-white font-semibold tracking-wide">Loading...</h3>
    </div>
  );
};

export default Loading;
