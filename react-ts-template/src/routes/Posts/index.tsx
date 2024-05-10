import { useEffect, FC } from 'react';
import { observer } from 'mobx-react-lite';

// Hooks
import { useTranslation } from 'react-i18next';

// Stores
import postsStore from 'stores/PostsStore';

const Posts: FC = () => {
  const { t } = useTranslation();

  const { posts, loading } = postsStore;

  useEffect(() => {
    postsStore.getPostsList();
  }, []);

  return (
    <div>
      {loading ? `${t('Loading')}..` : null}
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default observer(Posts);
