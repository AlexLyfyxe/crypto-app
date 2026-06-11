import { Card, Layout, Statistic, List, Typography, Tag  } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { capitalize } from '../../utils'
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context'

const siderStyle = {
  padding: '1rem',
  background: 'radial-gradient(circle at 50% 0%, #1a2a44 0%, #0d1b2a 40%, #050b14 100%) fixed',
};

const CardsStyle = {
  background: 'rgba(255, 255, 255, 0.98)',
  backdropFilter: 'blur(40px)',
  WebkitBackdropFilter: 'blur(50px)',
  border: '1px solid rgba(255, 255, 255, 0.9)',
  borderRadius: '20px',
  boxShadow: '0 0 25px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.2), 0 20px 40px rgba(0, 0, 0, 0.4)',
  marginBottom: '1.5rem',
};


export default function AppSider() {
    const { assets } = useContext(CryptoContext)


    return (

        <Layout.Sider width="25%" style={siderStyle}>
            {assets.map(asset => (
                <Card key={asset.id} style={CardsStyle}>
                    <Statistic
                        title={capitalize(asset.id)}
                        value={asset.totalAmount}
                        precision={2}
                        valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322' }}
                        prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                        suffix="$"
                    />

                    <List
                        size='small'
                        dataSource={[
                            {title: 'Total Profit', value: asset.totalProfit, withTag: true},
                            {title: 'Asset Amount', value: asset.amount, isPlane: true},
                            // {title: 'Difference', value: asset.growPercent},
                        ]}
                        renderItem={(item) => (
                        <List.Item >
                            <span>{item.title}</span>
                            <span>
                                {item.withTag && <Tag color={asset.grow ? 'green' : 'red'}>{asset.growPercent}%</Tag>}
                                {item.isPlane &&  item.value}
                                {!item.isPlane && <Typography.Text type={asset.grow ? 'success' : 'danger'}>{item.value.toFixed(2)}$</Typography.Text>}
                            </span>
                        </List.Item>
                    )}
                    />
              </Card>
            ))}

        </Layout.Sider>
    )
}