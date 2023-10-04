import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

interface progressIndicatorProps {
    steps_completed: number,
    steps_total: number
}

function ProgressIndicator({steps_completed, steps_total}: progressIndicatorProps) {
    return (
        <CircularProgress value={steps_completed / steps_total * 100} size="40px" thickness='14px'>
            <CircularProgressLabel>{(steps_completed / steps_total * 100).toFixed(0)}%</CircularProgressLabel>
        </CircularProgress>
    )
}

export default ProgressIndicator
