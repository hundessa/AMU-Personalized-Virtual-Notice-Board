

const Footer: React.FC = () => {
    return (
        <>
            <div className="mx-[10%] mt-16">
                <hr className="mb-12"/>
                <div className="flex justify-between">
                    <div>

                    <h1 className="font-bold text-xl">AMU News</h1>
                    </div>
                    <div className="flex flex-col justify-center space-y-2 font-semibold">
                        <a href="">Home</a>
                        <a href="">News</a>
                        <a href="">Contact Us</a>
                    </div>
                </div>
                <hr className="my-12" />
                <h1 className="text-center font-light">&copy; 2024 AMU News. All rights reserved</h1>
        </div>
        </>
    )
}

export default Footer;