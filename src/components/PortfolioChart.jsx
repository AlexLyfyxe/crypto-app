import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useCrypto } from '../context/crypto-context';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function PortfolioChart() {
    const {assets} = useCrypto()

    const data = {
        labels: assets.map(a => a.name),
        datasets: [
            {
            label: '$',
            data: assets.map(a => a.totalAmount),
            backgroundColor: [
                'rgba(255, 215, 0, 0.8)',
                'rgba(0, 140, 255, 0.8)',
                'rgba(255, 0, 128, 0.8)',
                'rgba(0, 255, 136, 0.9)',
                'rgba(0, 229, 255, 0.8)',
                'rgba(157, 0, 255, 0.8)',
            ],
            borderWidth: 0,
    },
  ],
};


    return (
        <div
            style={{
                display: 'flex',
                marginBottom: '1rem',
                justifyContent: 'center',
                height: 400,
            }}
        >
            <Pie data={data} />
        </div>
    )
    
    
}