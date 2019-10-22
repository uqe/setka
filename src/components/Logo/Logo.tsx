import React from 'react'

import { Tooltip } from '../../components'

const SetkaLogo = (): JSX.Element => (
  <img alt="logo" style={{ maxWidth: '50vw' }} src="https://wpvip.com/wp-content/uploads/2018/08/setka_logo.png" />
)

const text =
  'Setka Editor integrates into any content management platform, seamlessly replacing standard text editors with an easy-to-use editorial experience design tool.'

const smallText = 'Setka Editor integrates into any content management platform.'

const longText =
  'Setka Editor integrates into any content management platform, seamlessly replacing standard text editors with an easy-to-use editorial experience design tool. Setka Editor integrates into any content management platform, seamlessly replacing standard text editors with an easy-to-use editorial experience design tool.'

export const Logo = (): JSX.Element => (
  <>
    <Tooltip text={text} position="right">
      <SetkaLogo />
    </Tooltip>
    <Tooltip text={text} position="bottom">
      <SetkaLogo />
    </Tooltip>
    <Tooltip text={longText} position="left">
      <SetkaLogo />
    </Tooltip>
    <Tooltip text={text} position="top">
      <SetkaLogo />
    </Tooltip>
    <Tooltip text={smallText}>
      <button>Button</button>
    </Tooltip>
    <Tooltip text={longText} position="right">
      <button>Button</button>
    </Tooltip>
  </>
)
