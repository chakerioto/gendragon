import MetamaskButton from '../MetamaskButton'
import Mail from '../UI/Mail'
import Noti from '../UI/Noti'

const HeaderRight = () => {
    return (
        <div className='flex'>
            <div className='flex items-center justify-center gap-6'>
                <div className='cursor-pointer'>
                    <Noti />
                </div>
                <div className='cursor-pointer'>
                    <Mail />
                </div>
            </div>
            <MetamaskButton />
        </div>
    )
}

export default HeaderRight