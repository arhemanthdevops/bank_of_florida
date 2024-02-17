# Variables for Terraform

variable "aws_region" {
  description = "AWS region to deploy resources"
  default     = "us-east-1"
}

variable "key_name" {
  description = "Name of the key pair to use for the EC2 instance"
}
