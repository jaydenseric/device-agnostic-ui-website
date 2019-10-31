import { LinkActive, Scroll } from 'device-agnostic-ui'
import React from 'react'
import { HookLinkCard } from '../../components/HookLinkCard'
import { Page } from '../../components/Page'
import { PageHeader } from '../../components/PageHeader'
import * as hooksMeta from '../../meta/hooks'

const HooksPage = () => {
  const hooksMetaSorted = Object.values(hooksMeta).sort()
  return (
    <Page title="Hooks" description="Device Agnostic UI React hooks.">
      <PageHeader heading="Hooks" />
      {!!hooksMetaSorted.length && (
        <Scroll>
          {hooksMetaSorted.map(({ name, description }) => (
            <LinkActive key={name} href={`/hooks/${name}`} passHref>
              <HookLinkCard hookName={name} hookDescription={description} />
            </LinkActive>
          ))}
        </Scroll>
      )}
    </Page>
  )
}

export default HooksPage
