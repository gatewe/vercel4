import Footer from './Footer'
import SectionContainer from './SectionContainer'

const HomeWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col">
        <main>{children}</main>
      </div>
    </SectionContainer>
  )
}

export default HomeWrapper
