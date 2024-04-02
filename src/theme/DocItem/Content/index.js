import React from 'react'
import clsx from 'clsx'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { useDoc } from '@docusaurus/plugin-content-docs/client'
import Heading from '@theme/Heading'
import MDXContent from '@theme/MDXContent'
import TagsListInline from '@theme/TagsListInline'

function TagsRow(props) {
  return (
    <div className={clsx('row margin-bottom--sm')}>
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  )
}

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle(doc) {
  const { metadata, frontMatter, contentTitle } = doc
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined'
  if (!shouldRender) {
    return null
  }
  return metadata.title
}
export default function DocItemContent({ children }) {
  const doc = useDoc()
  const syntheticTitle = useSyntheticTitle(doc)
  const {
    metadata: { tags },
  } = doc
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      {!!tags.length && <TagsRow tags={tags} />}
      <MDXContent>{children}</MDXContent>
    </div>
  )
}
