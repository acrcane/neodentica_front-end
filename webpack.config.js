const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/neodentica_front-end/", 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: isDevelopment ? [require.resolve("react-refresh/babel")] : [],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        ...(isDevelopment ? [new ReactRefreshWebpackPlugin()] : []),
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3030,
        open: true,
        client: {
            logging: "none",
        },
        devMiddleware: {
            stats: "none", 
        },
    },
    devtool: isDevelopment ? "source-map" : false,
};

