import { HeadFC } from 'gatsby';

const NotFoundPage = () => {
  return <div>NotFound</div>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
