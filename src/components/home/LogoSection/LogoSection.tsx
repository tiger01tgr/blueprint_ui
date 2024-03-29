import styles from './LogoSection.module.css'
import Image from 'next/image'
import amd from '../../../../public/logos/AMD.png'
import shopify from '../../../../public/logos/shopify.png'
import spacex from '../../../../public/logos/SpaceX.png'
import nvidia from '../../../../public/logos/Nvidia.svg'
import coinbase from '../../../../public/logos/Coinbase.png'
import ms from '../../../../public/logos/MorganStanley.png'
import jpm from '../../../../public/logos/jpmorgan.png'
import bain from '../../../../public/logos/Bain.png'
import google from '../../../../public/logos/Google.png'
import mckinsey from '../../../../public/logos/McKinsey.png'
import openai from '../../../../public/logos/OpenAI.png'
import wp from '../../../../public/logos/WarburgPincus.png'
import lazard from '../../../../public/logos/lazard.png'
import blackrock from '../../../../public/logos/blackrock.png'
import palantir from '../../../../public/logos/palantir.png'
import paypal from '../../../../public/logos/paypal.png'
import stripe from '../../../../public/logos/stripe.png'
import robinhood from '../../../../public/logos/robinhood.png'

const LogoSection = () => {
    return (
        <div className={styles.liner}>
            <div className={styles.title}>
                10,000+ questions from industry leaders & high-growth start-ups
            </div>
            <div className={styles.logos}>
                <div className={styles.logosParent}>
                    <div className={styles.logosSlide}>
                        <Image src={spacex} alt='spacex' className={styles.logo} loading="eager" />
                        <Image src={shopify} alt="shopify" className={styles.logo} loading="eager"/>
                        <Image src={amd} alt="amd" className={styles.logo} loading="eager"/>
                        <Image src={nvidia} alt='nvidia' className={styles.logo} loading="eager"/>
                        {/* <Image src={bain} alt='bain' className={styles.logo} /> */}
                        <Image src={coinbase} alt='coinbase' className={styles.logo} loading="eager"/>
                        <Image src={ms} alt='ms' className={styles.logo} loading="eager"/>
                        <Image src={google} alt='google' className={styles.logo} loading="eager"/>
                        {/* <Image src={jpm} alt='jpm' className={styles.logo} /> */}
                        <Image src={blackrock} alt="blackrock" className={styles.logo} loading="eager"/>
                        <Image src={paypal} alt="paypal" className={styles.logo} loading="eager"/>
                        <Image src={mckinsey} alt="mckinsey" className={styles.logo} loading="eager"/>
                        <Image src={stripe} alt="stripe" className={styles.logo} loading="eager"/>
                        {/* <Image src={robinhood} alt="robinhood" className={styles.logo} /> */}
                        <Image src={openai} alt="openai" className={styles.logo} loading="eager"/>
                        {/* <Image src={wp} alt="wp" className={styles.logo} /> */}
                        <Image src={lazard} alt="lazard" className={styles.logo} loading="eager"/>
                        <Image src={palantir} alt="palantir" className={styles.logo} loading="eager"/>
                    </div>
                    <div className={styles.logosSlide}>
                    <Image src={spacex} alt='spacex' className={styles.logo} loading="eager" />
                        <Image src={shopify} alt="shopify" className={styles.logo} loading="eager"/>
                        <Image src={amd} alt="amd" className={styles.logo} loading="eager"/>
                        <Image src={nvidia} alt='nvidia' className={styles.logo} loading="eager"/>
                        {/* <Image src={bain} alt='bain' className={styles.logo} /> */}
                        <Image src={coinbase} alt='coinbase' className={styles.logo} loading="eager"/>
                        <Image src={ms} alt='ms' className={styles.logo} loading="eager"/>
                        <Image src={google} alt='google' className={styles.logo} loading="eager"/>
                        {/* <Image src={jpm} alt='jpm' className={styles.logo} /> */}
                        <Image src={blackrock} alt="blackrock" className={styles.logo} loading="eager"/>
                        <Image src={paypal} alt="paypal" className={styles.logo} loading="eager"/>
                        <Image src={mckinsey} alt="mckinsey" className={styles.logo} loading="eager"/>
                        <Image src={stripe} alt="stripe" className={styles.logo} loading="eager"/>
                        {/* <Image src={robinhood} alt="robinhood" className={styles.logo} /> */}
                        <Image src={openai} alt="openai" className={styles.logo} loading="eager"/>
                        {/* <Image src={wp} alt="wp" className={styles.logo} /> */}
                        <Image src={lazard} alt="lazard" className={styles.logo} loading="eager"/>
                        <Image src={palantir} alt="palantir" className={styles.logo} loading="eager"/>
                    </div>
                </div>
            </div>
            {/* <div className={styles.gallery}>
                <Image src={google} alt="google" className={styles.staticLogo} loading="eager"/>
                <Image src={lazard} alt="lazard" className={styles.staticLogo} loading="eager"/>
                <Image src={amd} alt="amd" className={styles.staticLogo} loading="eager"/>
                <Image src={openai} alt="openai" className={styles.staticLogo} loading="eager"/>
                <Image src={mckinsey} alt="mckinsey" className={styles.staticLogo} loading="eager"/>
                <Image src={spacex} alt='spacex' className={styles.staticLogo} loading="eager"/>
            </div> */}
        </div>
    )
}

export default LogoSection