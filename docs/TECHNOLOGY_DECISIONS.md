# Technology Decision Record


# Backend Framework

## Selected

Node.js + Express


## Reason

- Excellent performance for I/O-heavy workloads
- Existing implementation compatibility
- Large ecosystem


## Rejected Alternative

Spring Boot


## Reason Rejected

Spring Boot is powerful but introduces higher resource usage and complexity for this workload.


---

# Message Queue

## Selected

RabbitMQ


## Reason

- Reliable message delivery
- Supports acknowledgements
- Built-in retry mechanisms


## Rejected Alternative

Apache Kafka


## Reason Rejected

Kafka is optimized for large event streaming systems and adds unnecessary operational complexity.


---

# Cache

## Selected

Redis


## Reason

- Distributed caching
- Fast read/write operations
- TTL support


## Rejected Alternative

Node.js Memory Cache


## Reason Rejected

Local memory cache cannot be shared between multiple application instances.


---

# Database

## Selected

PostgreSQL


## Reason

- Strong consistency
- Structured relational data
- Reliable transactions


## Rejected Alternative

MongoDB


## Reason Rejected

Audit results require relational querying and reporting.


---

# Deployment

## Selected

Docker + Cloud Platform


## Reason

- Easy scaling
- Environment consistency
- Simplified deployment


## Rejected Alternative

Single Virtual Machine


## Reason Rejected

Cannot handle traffic spikes and provides limited fault tolerance.