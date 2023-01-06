-- CreateTable
CREATE TABLE `customers` (
    `_id` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `complement` VARCHAR(191) NULL,

    UNIQUE INDEX `customers_cpf_key`(`cpf`),
    UNIQUE INDEX `customers_email_key`(`email`),
    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
