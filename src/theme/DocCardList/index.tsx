import React from 'react';
import clsx from 'clsx';
import {useCurrentSidebarSiblings, filterDocCardListItems} from '@docusaurus/plugin-content-docs/client';
import DocCard from '@theme/DocCard';
import type {Props} from '@theme/DocCardList';
import type {ComponentProps} from 'react';
import styles from './styles.module.css';

type DocCardItem = ComponentProps<typeof DocCard>['item'];

function DocCardListForCurrentSidebarCategory({className}: Props) {
  const items = useCurrentSidebarSiblings();
  return <DocCardList items={items} className={className} />;
}

function DocCardListItem({item}: {item: DocCardItem}) {
  const image = (item as any)?.customProps?.image as string | undefined;
  const enhancedItem = image ? {...item, image} : item;

  return (
    <article className={styles.item}>
      <DocCard item={enhancedItem} />
    </article>
  );
}

export default function DocCardList(props: Props) {
  const {items, className} = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section className={clsx(styles.list, className)}>
      {filteredItems.map((item, index) => (
        <DocCardListItem key={index} item={item} />
      ))}
    </section>
  );
}
