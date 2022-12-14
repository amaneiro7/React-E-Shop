const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressPlugin = require('progress-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const devServerConfig = {
    static: path.join(__dirname, 'dist',),
    compress: true,
    historyApiFallback: true,
    open: ['/react-e-shop'],
    port: 3005,
    client: {
        progress: true,
    }
};

const aliases = {
    '@components': path.resolve(__dirname, 'src/components/'),
    '@containers': path.resolve(__dirname, 'src/containers/'),
    '@hooks': path.resolve(__dirname, 'src/hooks/'),
    '@pages': path.resolve(__dirname, 'src/pages/'),
    '@context': path.resolve(__dirname, 'src/context/'),
    "@styles": path.resolve(__dirname, "src/styles/"),
    "@icons": path.resolve( __dirname, "src/assets/icons/"),
    "@logos": path.resolve( __dirname, "src/assets/logos/"),
    "@fonts": path.resolve( __dirname, "src/assets/fonts/")
}

const optimizationConfig = {
    minimize: true,
    minimizer: [
        new CssMinimizerPlugin(),
    ]
}


module.exports = (env, {mode}) => ({
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle[contenthash].js',                
        filename: 'bundle[contenthash].js',
        publicPath: (mode === 'production' ? './' : '/React-E-Shop'),
        clean: (mode === 'production' ? true : false),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: aliases
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [                    
                    'style-loader', // post process the compiled CSS
                    'css-loader',
                    'sass-loader', // compiles Sass to CSS, using Node Sass by Default
                ]
            },
            {
                test: /\.(png|svg|jp(e*)g|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext]',
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext]',
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name][contenthash].css'
        }),
        new ProgressPlugin(true),           
    ],
    devServer: (mode === 'development' ? devServerConfig : {}),
    optimization: (mode === 'production' ? optimizationConfig : {})
})