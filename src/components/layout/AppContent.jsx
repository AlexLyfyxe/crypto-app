import { Layout, Typography } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import PortfolioChart from '../PortfolioChart';
import AssetsTable from '../AssetsTable';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  color: '#fff',
  background: 'radial-gradient(circle at 50% 0%, #1a2a44 0%, #0d1b2a 40%, #050b14 100%) fixed',
  padding: '1rem',
};

export default function AppContent() {
    const { assets, crypto } = useCrypto()

    const cryptoPriceMap = crypto.reduce((acc, c) => {
        acc[c.id] = c.price
        return acc
    }, {})


    return (
        <Layout.Content style={contentStyle}>
            <Typography.Title level={2} style={{ textAlign: 'left', color: '#fff' }}>
                Portfolio: 
                {assets
                    .map((asset) => asset.amount * cryptoPriceMap[asset.id])
                        // const coin = crypto.find((c) => c.id === asset.id)
                    .reduce((acc, v) => (acc += v), 0)
                    .toFixed(2)}
                    $
            </Typography.Title>

            <PortfolioChart />
            <AssetsTable />
        </Layout.Content>
    )
}