const CardPost = ({ post }) => {
  return (
    <div>
      <li className="bg-base-100 rounded-3xl p-6 flex justify-between items-center">
        <div>
          <div className="font-bold mb-1 text-lg">{post.title}</div>
          <div className="opacity-80 leading-relaxed max-h-32 overflow-y-auto">
            {post.description}
          </div>
        </div>
        <button className="btn btn-square">🔼</button>
      </li>
    </div>
  );
};

export default CardPost;
