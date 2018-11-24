import React from 'react'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

import ExternalLink from 'components/ExternalLink'

import { css } from 'emotion'

const iconStyles = css`
  font-size: 2rem;
  margin: 0 1rem;
`

export default () => (
  <>
    <p>
      I&#39;m always up for a chat.
      <br />
      If you want to contact me, you can find me at any of the links below.
    </p>
    <div>
      <ExternalLink href="mailto:simone.ferrero@outlook.com">
        <MdMail className={iconStyles} />
      </ExternalLink>
      <ExternalLink href="https://github.com/simoneferrero">
        <FaGithub className={iconStyles} />
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/simoneferrero/">
        <FaLinkedin className={iconStyles} />
      </ExternalLink>
      <ExternalLink href="https://twitter.com/_simoneferrero">
        <FaTwitter className={iconStyles} />
      </ExternalLink>
    </div>
  </>
)
