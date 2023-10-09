import styles from './TimelineSection.module.css'

const TimelineSection = () => {
    return (
        <div className={styles.liner}>
            <div className={styles.title}>
                how bluprint works
            </div>
            <div className={styles.timelineSection}>
                <div className={styles.timelinePart}>
                    <div className={styles.timelineNode}>
                        1
                    </div>
                    <div className={styles.timelineLine} />
                    <div className={styles.timelinePartText}>
                        <div className={styles.timelinePartTitle}>
                            Take a practice interview
                        </div>
                        <div className={styles.timelinePartSubtitle}>
                            Each interview set is based on real, industry-specific questions asked by leading companies.
                        </div>
                    </div>
                </div>
                <div className={styles.timelinePart}>
                    <div className={styles.timelineLineReverse} />
                    <div className={styles.timelineNode}>
                        2
                    </div>
                    <div className={styles.timelineLine} />
                    <div className={styles.timelinePartText}>
                        <div className={styles.timelinePartTitle}>
                            Our AI starts grading
                        </div>
                        <div className={styles.timelinePartSubtitle}>
                            Bluprint is trained on answers by professionals in your field and provides personalized feedback within hours.
                        </div>
                    </div>
                </div>
                <div className={styles.timelinePart}>
                    <div className={styles.timelineLineReverse} />
                    <div className={styles.timelineNode}>
                        3
                    </div>
                    <div className={styles.timelinePartText}>
                        <div className={styles.timelinePartTitle}>
                            Review your feedback
                        </div>
                        <div className={styles.timelinePartSubtitle}>
                            You&apos;ll receive comments on each of your responses from the interview to help identify areas of improvement.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimelineSection