import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { useEffect } from 'react'

const Gallery = () => {

    useEffect(() => {

    const track = document.getElementById("image-track");

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
        if (track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -140,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for (const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    }

    /* -- Had to add extra lines for touch events -- */

    window.onmousedown = e => handleOnDown(e);

    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);

    }, [])

    return (
        <div id='wrap'>
            <div id='title'>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>My Work</p>
                    <h2 className={styles.sectionHeadText}>Gallery.</h2>
                </motion.div>
            </div>
            <div id="body">
                <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">

                    <img className="image" src="/src/assets/gallery/SteamPunk_About.png" draggable="false" />
                    <img className="image" src="/src/assets/gallery/SteamPunk_Games.png" draggable="false" />
                    <img className="image" src="/src/assets/gallery/SteamPunk_Studio.png" draggable="false" />                    
                    <img className="image" src="/src/assets/gallery/Express_Map.png" draggable="false" />
                    <img className="image" src="/src/assets/gallery/Express_Chat.png" draggable="false" />
                    <img className="image" src="/src/assets/gallery/Express_Graphs.png" draggable="false"/>
                    <img className="image" src="/src/assets/gallery/Express_Donations.png" draggable="false" />
                    
                </div>
            </div>
        </div>
    )
}

export default Gallery