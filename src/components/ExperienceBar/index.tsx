import {Container} from './style'

export const ExperienceBar = () => {
  return (
    <Container >
      <span>0 xp</span>
      <div>
        <div style={{width:'50%'}}/>

        <span className="current-experience" style={{left: '50%'}}>300 xp</span>
      </div>
      <span>600 px</span>
    </Container>
  )
}