import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import BehanceIcon from '@material-ui/icons/Palette'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social, picture } = about

  return (
    <div className='about center'>
      <div className='about__header'>


        <div className='about__intro'>
          {name && (
            <h1>
              <span className='about__name'>{name}.</span>
            </h1>
          )}

          {role && <h2 className='about__role'> {role}.</h2>}
          <p className='about__desc'>{description && description}</p>
        </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              CV
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.behance && (
              <a
                href={social.behance}
                aria-label='behance'
                className='link link--icon'
              >
                <BehanceIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
