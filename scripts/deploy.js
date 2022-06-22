
const main = async () => {
    const getContractFactory = await hre.ethers.getContractFactory("MyToken");
    const myTokenContract = await getContractFactory.deploy();
    await myTokenContract.deployed();

    console.log("Your Token Address is: ", myTokenContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();