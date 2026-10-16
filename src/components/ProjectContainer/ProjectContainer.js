
import { useState, useEffect } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import CloseIcon from '@material-ui/icons/Close'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false)

  const imageSrc = project.image
    ? project.image.startsWith('http')
      ? project.image
      : `${process.env.PUBLIC_URL}/images/${project.image}`
    : null

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <article
        className='project'
        onClick={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setIsOpen(true)
          }
        }}
        role='button'
        tabIndex={0}
        aria-label={`Ver detalhes do projeto ${project.name}`}
      >
        {imageSrc && (
          <img
            className='project__image'
            src={imageSrc}
            alt={`Imagem do projeto ${project.name}`}
            loading='lazy'
          />
        )}

        <div className='project__content'>
          <h3>{project.name}</h3>

          <p className='project__description'>
            {project.description}
          </p>

          <span className='project__more'>
            Ver projeto <span aria-hidden='true'>↗</span>
          </span>
        </div>
      </article>

      {isOpen && (
        <div
          className='project-modal__overlay'
          onClick={() => setIsOpen(false)}
        >
          <section
            className='project-modal'
            role='dialog'
            aria-modal='true'
            aria-labelledby='project-modal-title'
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type='button'
              className='project-modal__close'
              onClick={() => setIsOpen(false)}
              aria-label='Fechar detalhes do projeto'
            >
              <CloseIcon />
            </button>

            {imageSrc && (
              <img
                className='project-modal__image'
                src={imageSrc}
                alt={`Imagem ampliada do projeto ${project.name}`}
              />
            )}

            <div className='project-modal__content'>
              <span className='project-modal__eyebrow'>
                Projeto
              </span>

              <h2 id='project-modal-title'>{project.name}</h2>

              <p className='project-modal__description'>
                {project.description}
              </p>

              {project.stack?.filter(Boolean).length > 0 && (
                <div className='project-modal__section'>
                  <h3>Tecnologias e ferramentas</h3>

                  <ul className='project-modal__stack'>
                    {project.stack.filter(Boolean).map((item, index) => (
                      <li key={`${item}-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className='project-modal__actions'>
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-modal__link'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <GitHubIcon />
                    Código-fonte / Projeto
                  </a>
                )}

                {project.livePreview && (
                  <a
                    href={project.livePreview}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-modal__link project-modal__link--secondary'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <LaunchIcon />
                    Ver demonstração
                  </a>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default ProjectContainer
