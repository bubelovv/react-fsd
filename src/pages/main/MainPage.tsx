import pngImage from '@/assets/asset.png'
import jpgImage from '@/assets/asset.jpg'
import jpegImage from '@/assets/asset.jpeg'
import SvgImage from '@/assets/asset.svg'

const MainPage = () => {
    return (
        <div>
            <h2>Main page</h2>
            <h2>platform: {PLATFORM}</h2>
            <h2>api-url: {API_URL}</h2>
            <img width={100} height={100} src={pngImage} alt="png"/>
            <img width={100} height={100} src={jpgImage} alt="jpg"/>
            <img width={100} height={100} src={jpegImage} alt="jpeg"/>
            <SvgImage color={'white'} width={100} height={100} />
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid delectus distinctio
                dolore dolores enim, eos eveniet fuga libero maxime minima necessitatibus odit perspiciatis quasi quia,
                quisquam reiciendis sapiente suscipit.
            </div>
        </div>
    )
}

export default MainPage