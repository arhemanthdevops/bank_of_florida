# Terraform configuration for AWS resources

provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "bank_app_instance" {
  ami           = "ami-0c55b159cbfafe1f0" # Amazon Linux 2 AMI
  instance_type = "t2.micro"
  key_name      = var.key_name
  tags = {
    Name = "bank-app-instance"
  }
}

resource "aws_security_group" "bank_app_sg" {
  name        = "bank-app-sg"
  description = "Security group for the bank application"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

output "instance_ip" {
  value = aws_instance.bank_app_instance.public_ip
}
