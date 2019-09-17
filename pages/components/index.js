import { LinkActive, Scroll, Toggle } from 'device-agnostic-ui'
import { useRouter } from 'next/router'
import React from 'react'
import { ComponentLinkCard } from '../../components/ComponentLinkCard'
import { PageHeader } from '../../components/PageHeader'
import { PageMeta } from '../../components/PageMeta'
import * as componentsMeta from '../../meta/components'
import * as componentsTags from '../../meta/tags'

const ComponentsPage = () => {
  const router = useRouter()
  const [filterTags, setFilterTags] = React.useState(
    router.query.tags ? router.query.tags.split(',').sort() : []
  )

  const onTagToggleChange = ({ target: { value, checked } }) => {
    const newFilterTags = checked
      ? [...filterTags, value].sort()
      : filterTags.filter(tag => tag !== value)

    setFilterTags(newFilterTags)

    const href = newFilterTags.length
      ? `${router.pathname}?tags=${newFilterTags.join(',')}`
      : router.pathname

    router.push(href, href, { shallow: true })
  }

  const componentsMetaFiltered = filterTags.length
    ? Object.values(componentsMeta).filter(({ tags }) =>
        tags.some(({ tag }) => filterTags.includes(tag))
      )
    : Object.values(componentsMeta)

  return (
    <>
      <PageMeta
        title="Components"
        description="Device Agnostic UI components."
      />
      <PageHeader heading="Components">
        {Object.values(componentsTags).map(({ tag, label, description }) => (
          <Toggle
            key={tag}
            title={description}
            inputProps={{
              type: 'checkbox',
              value: tag,
              checked: filterTags.includes(tag),
              onChange: onTagToggleChange
            }}
          >
            {label}
          </Toggle>
        ))}
      </PageHeader>
      {!!componentsMetaFiltered.length && (
        <Scroll>
          {componentsMetaFiltered.map(({ name, description }) => (
            <LinkActive key={name} href={`/components/${name}`} passHref>
              <ComponentLinkCard
                componentName={name}
                componentDescription={description}
              />
            </LinkActive>
          ))}
        </Scroll>
      )}
    </>
  )
}

// Disable Next.js automatic prerendering, as it causes an empty router query
// object in SSR.
ComponentsPage.getInitialProps = () => ({})

export default ComponentsPage
