import Icon from '../../Shared/Icon'

const CongratulationsCard = () => {
  return (
    <div className="relative h-full">
      <div className="h-full p-5 bg-white rounded-md flex flex-col items-center justify-center">
        

        <div className="rounded-full shadow-main mb-5 bg-[#7367f0]">
          <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center">
            <Icon name="Award" color="#fff" width={28} height={28} />
          </div>
        </div>

        <h1 className="text-[26px] font-medium text-black text-center mt-[7px] mb-3">
          Congratulations Mugesh Rao,
        </h1>

        <p className="mx-14 text-sm text-black text-center">
          You have Got <strong>80%</strong> Percentage in Python. 
        </p>
      </div>
    </div>
  )
}

export default CongratulationsCard
