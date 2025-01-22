import ButtonVote from "./ButtonVote";

const CardPost = ({ post }) => {
  return (
    <div>
      <li className="bg-base-100 rounded-3xl p-6 flex justify-between items-start">
        <div>
          <div className="font-bold mb-1 text-lg">{post.title}</div>
          <div className="opacity-80 leading-relaxed max-h-32 overflow-y-auto">
            {post.description}
          </div>
        </div>
        <ButtonVote
          postId={post._id.toString()}
          initialVotesCounter={post.votesCounter}
        />
      </li>
    </div>
  );
};

export default CardPost;
