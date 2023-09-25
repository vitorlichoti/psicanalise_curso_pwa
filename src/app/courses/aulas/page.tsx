import React from 'react'

interface coursePageProps {
    params: { id: string }
}
function AulasPage({params}: coursePageProps) {
    return (
        <div>{params.id}</div>
    )
}

export default AulasPage
