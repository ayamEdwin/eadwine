import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import type {Props} from '@theme/BlogListPage';

export default function BlogListPageOverride(props: Props) {
  const items = React.useMemo(() => {
    return props.items.map((item) => {
      if (item.content && typeof item.content === 'object') {
        const content = item.content as {title?: string; description?: string; frontMatter?: {description?: string}};
        const description = content.description || content.frontMatter?.description || '';
        const trimmed = description.length > 180 ? `${description.slice(0, 177).trimEnd()}...` : description;
        return {
          ...item,
          content: {
            ...content,
            description: trimmed,
          },
        };
      }
      return item;
    });
  }, [props.items]);

  return <BlogListPage {...props} items={items} />;
}
