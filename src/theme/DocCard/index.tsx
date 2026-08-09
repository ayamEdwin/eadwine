import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useDocById} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

type DocCardItem = {
  href?: string;
  label?: string;
  title?: string;
  description?: string;
  docId?: string;
  image?: string;
  customProps?: {[key: string]: unknown};
};

export default function DocCard({item}: {item: DocCardItem}) {
  const doc = item?.docId ? useDocById(item.docId) : null;
  // Prefer direct item image first, then customProps, then doc frontMatter.
  const imageFromItem = item?.image as string | undefined;
  const imageFromCustomProps = (item as any)?.customProps?.image as string | undefined;
  const imageFromDoc = doc?.frontMatter?.image as string | undefined;
  const image = imageFromItem ?? imageFromCustomProps ?? imageFromDoc;
  const imgSrc = image ? useBaseUrl(image) : null;
  const title = item.label || item.title;

  return (
    <article className={styles.cardItem}>
      <Link href={item.href ?? '#'} className={styles.card} aria-label={title}>
        <div className={styles.imageWrapper}>
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={title ?? 'Project thumbnail'}
              loading="lazy"
              decoding="async"
              className={styles.image}
            />
          ) : (
            <div className={styles.fallbackIcon}>📄️</div>
          )}
        </div>

        <div className={styles.content}>
          <div>
            <h2 className={styles.title} title={title}>
              {title}
            </h2>
            {item.description ? (
              <p className={styles.description}>{item.description}</p>
            ) : null}
          </div>

          <div className={styles.footer}>
            <span className={styles.cta}>View project →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
