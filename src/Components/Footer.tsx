

const Footer: React.FC = () => {
    return (
        <>
            <div className="mx-[10%] mt-16">
                <hr className=""/>
                <div className="flex justify-between my-22">
                    <div>

                    <h1 className="font-bold text-xl">AMU News</h1>
                    </div>
                    <div className="flex flex-col justify-center space-y-2 font-semibold">
                        <a href="/">Home</a>
                        <a href="/news">News</a>
                        <a href="">Contact Us</a>
                    </div>
                </div>
                <hr className="" />
                <h1 className="text-center font-light my-8">&copy; 2024 AMU News. All rights reserved</h1>
        </div>
        </>
    )
}

export default Footer;