# Outputs for Terraform

output "instance_ip" {
  description = "Public IP address of the bank app instance"
  value       = aws_instance.bank_app_instance.public_ip
}
